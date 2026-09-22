// Run on macOS: swift -module-cache-path /tmp/ai-slides-module-cache scripts/export-ai-slides.swift
import AppKit
import PDFKit

let root = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
let source = root.appendingPathComponent("public/ai-lab-presentation.pdf")
let output = root.appendingPathComponent("public/ai-lab-slides")
guard let document = PDFDocument(url: source) else { fatalError("Cannot open presentation PDF") }
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
var slides: [[String: String]] = []
for index in 0..<document.pageCount {
    guard let page = document.page(at: index) else { fatalError("Missing page") }
    let bounds = page.bounds(for: .mediaBox)
    let width = 1920
    let height = Int(Double(width) * bounds.height / bounds.width)
    let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
        colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
    let graphics = NSGraphicsContext(bitmapImageRep: bitmap)!
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = graphics
    let context = graphics.cgContext
    context.setFillColor(NSColor.white.cgColor)
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))
    context.scaleBy(x: CGFloat(width) / bounds.width, y: CGFloat(height) / bounds.height)
    context.translateBy(x: -bounds.minX, y: -bounds.minY)
    page.draw(with: .mediaBox, to: context)
    NSGraphicsContext.restoreGraphicsState()
    let filename = "slide-\(index + 1).jpg"
    try bitmap.representation(using: .jpeg, properties: [.compressionFactor: 0.85])!
        .write(to: output.appendingPathComponent(filename))
    slides.append(["src": "/ai-lab-slides/\(filename)", "text": page.string ?? "Slide \(index + 1)"])
}
let manifest = try JSONSerialization.data(withJSONObject: slides, options: [.prettyPrinted, .sortedKeys])
try manifest.write(to: root.appendingPathComponent("src/pages/aiLabSlides.json"))
print("Exported \(slides.count) slides")
