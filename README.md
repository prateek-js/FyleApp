# FyleApp
app for fyle assignment

This app is made using 4.12.0 version

App creation :- ionic start fyleApp blank

Run the App :- ionic serve

Run app in devapp mode :- ionic serve --devapp 
Same app can be seen in mobile device also given that DevApp is installed on device and is under same internet network as in
https://ionicframework.com/docs/appflow/devapp

Build for Android & ios :- ionic cordova prepare ios/android 
Run on device :- ionic cordova run ios -l/ ionic cordova run android -l


Web App link:- https://fyleapp-50dd3.web.app/home

Time Taken:-
1. Create ionic 4 scaffold by ionic cli and updating gradle for local system to support android oreo and installing of ionic devApp with creation of Dropdown for city selection and searchbar - 1hr
2. Creating ionic virtual scroll with ionic card. started of with normal list then went to ionic infinite scroll then selected ionic virtual scroll and integration of Api - 1.5hrs
3. Building for android device - 0.5hr
4. Deploying to github & firebase - 1hr. Sometime went in exploring ionic hub for deployment
5. Creation of Apk but my office mac has username with space so apk is not getting created as gradle not able to recognise it.
Tried running the android project using android studio with device connected was able to install the apk. - 1.5hr
