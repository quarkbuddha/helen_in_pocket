const wdio = require('webdriverio');

const opts = {
    port: 4723,
    desiredCapabilities: {
	platformName: "Android",
	platformVersion: "8.0",
	deviceName: "Android Emulator",
	app: "platforms/android/app/build/outputs/apk/debug/app-debug.apk",
	automationName: "UiAutomator2"
    }
};

const client = wdio.remote(opts);

client.init().end();
