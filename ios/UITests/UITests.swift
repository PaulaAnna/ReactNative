//
//  UITests.swift
//  UITests
//
//  Created by Paula Engelberg on 2020/07/24.
//

import XCTest

class UITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()
        sleep(5)
        
   //   print(XCUIApplication().debugDescription)
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
      

    }
  
    func testOpenCloseDrawer() throws {
     
      let app = XCUIApplication()
      app.launch()
      sleep(5)

      let half : CGFloat = 0.5
      let right : CGFloat = 0.8
      let left : CGFloat = 0.01
      let pressDuration : TimeInterval = 0.05
      let start = app.coordinate(withNormalizedOffset: CGVector(dx: left, dy: half))
      let center = app.coordinate(withNormalizedOffset: CGVector(dx: half, dy: half))
      let outerDrawer = app.coordinate(withNormalizedOffset: CGVector(dx: right, dy: half))
    
      let nrSwipes = 3
     
      for i in 1 ..< nrSwipes {
        if i == 1 {
          sleep(3)
          start.press(forDuration: pressDuration, thenDragTo: center)
          sleep(3)
          outerDrawer.tap()
          sleep(3)
        } else {
          start.press(forDuration: pressDuration, thenDragTo: center)
          sleep(3)
          outerDrawer.tap()
          sleep(3)
          }
      }
      sleep(5)
    }
       
    func testSwitchPages() throws {
        let app = XCUIApplication()
        app.launch()
      
        sleep(2)
        app.buttons["Next testcase"].tap()
      
        sleep(3)
        app.buttons["Change to the next screen"].tap()
        sleep(4)
        app.buttons["Change to previous screen"].tap()
        sleep(4)
        app.buttons["Change to the next screen"].tap()
        sleep(4)
    }
       
    func testSwipeList() throws{
        let app = XCUIApplication()
        app.launch()
        sleep(5)
      
        app.buttons["Next testcase"].tap()
        app.buttons["Next testcase"].tap()
      
        app.swipeUp()
        sleep(3)
        app.swipeUp()
        sleep(3)
        app.swipeUp()
        sleep(5)
    }
    
    func testLaunchPerformance() throws {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
                XCUIApplication().launch()
            }
        }
    }
}
