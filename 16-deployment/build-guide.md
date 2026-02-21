# Build and Deployment Guide

## Creating Release Builds

### For Android

```bash
# Build APK
npx react-native build-android --mode=release

# Generate signed APK for Play Store
cd android
./gradlew assembleRelease
```

### For iOS

```bash
# Build for iOS
npx react-native build-ios --mode=release

# Using Xcode
cd ios
xcodebuild -scheme YourApp -configuration Release
```

## Store Deployment

### Apple App Store
1. Create App Store Connect account
2. Create new app in App Store Connect
3. Upload binary through Xcode or Transporter
4. Submit for review

### Google Play Store
1. Create developer account
2. Create app in Google Play Console
3. Upload signed APK or App Bundle
4. Complete store listing
5. Submit for review

## Over-the-Air Updates

Consider using services like CodePush for quick updates without app store resubmission.
