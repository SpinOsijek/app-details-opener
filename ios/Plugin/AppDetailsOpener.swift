import Foundation

@objc public class AppDetailsOpener: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
