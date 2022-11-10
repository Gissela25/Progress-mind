
export default
  {
    "expo": {
      "name": "Progress-mind",
      "slug": "Progress-mind",
      "version": "1.0.0",
      "scheme":"host.exp.exponent",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "host.exp.exponent"
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        },
        "package": "host.exp.exponent"
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
    }
  }
