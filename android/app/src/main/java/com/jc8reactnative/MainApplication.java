package com.jc08_Mobile_Exam;


import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
        new VectorIconsPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}


// import android.app.Application;

// import com.facebook.react.ReactApplication;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.shell.MainReactPackage;
// import com.facebook.soloader.SoLoader;
// import com.reactnativenavigation.NavigationApplication;

// import java.util.Arrays;
// import java.util.List;

// public class MainApplication extends NavigationApplication {
//   @Override
// 	public boolean isDebug() {
// 		// Make sure you are using BuildConfig from your own application
// 		return BuildConfig.DEBUG;
// 	}

// 	protected List<ReactPackage> getPackages() {
// 		// Add additional packages you require here
// 		// No need to add RnnPackage and MainReactPackage
// 		return Arrays.<ReactPackage>asList(
// 			// eg. new VectorIconsPackage()
// 		);
// 	}

// 	@Override
// 	public List<ReactPackage> createAdditionalReactPackages() {
// 		return getPackages();
// 	}

//   @Override
//   public String getJSMainModuleName() {
//     return "index";
//   }

//   // private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//   //   @Override
//   //   public boolean getUseDeveloperSupport() {
//   //     return BuildConfig.DEBUG;
//   //   }

//   //   @Override
//   //   protected List<ReactPackage> getPackages() {
//   //     return Arrays.<ReactPackage>asList(
//   //         new MainReactPackage()
//   //     );
//   //   }

//   //   @Override
//   //   protected String getJSMainModuleName() {
//   //     return "index";
//   //   }
//   // };

//   // @Override
//   // public ReactNativeHost getReactNativeHost() {
//   //   return mReactNativeHost;
//   // }

//   // @Override
//   // public void onCreate() {
//   //   super.onCreate();
//   //   SoLoader.init(this, /* native exopackage */ false);
//   // }
// }
