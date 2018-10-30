# T3G1

## Social Impact Exhibit - 14 Faculties

The goal of this project is to create a museum-like experience through an exhibit in U.Porto's rectory, which aims to present each one of the 14 faculties of the University.
A visitor to U.Porto's rectory can get to know each faculty, its projects and resulting impact in society, as well as future prospects on tomorrow's world by interacting with a tablet. Each faculty has its own user experience and visual aspect.

Although there are somewhat similar apps (_e.g._ [Study UK Exhibitions](https://play.google.com/store/apps/details?id=uk.education.education_exhibitions&_ga=2.81994832.730515720.1538341544-1603621910.1538341544)), where you can get to know a faculty and events it organises, these apps are not tailored for the social impact the faculties' projects have, and cannot be configured to our client's use case.


### Team
-   André Miguel Ferreira da Cruz - __Scrum Master__
-   António Cunha Seco Fernandes de Almeida
-   Edgar Filipe Amorim Gomes Carneiro - __SPO__
-   João Dias Conde Azevedo
-   João Nuno Fonseca Seixas
-   João Paulo Madureira Damas
-   Luís Noites Martins
-   Mariana Lopes da Silva

## _Mobile App_ Development Environment Setup

On the root directory:

- Run docker

```
docker-compose up --build mobile
```

- Wait for QR code to show up and scan with mobile phone using the [Expo](https://expo.io) app

  If you can't access the url provided by Expo, try uncommenting the following line on the `Dockerfile` with your [host machine's local IP address](https://www.whatismybrowser.com/detect/what-is-my-local-ip-address).

```
ENV REACT_NATIVE_PACKAGER_HOSTNAME=<your-local-ip-address>

# Example
ENV REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.123
```

### Running on a Emulator

If you prefer/need to run the app on an emulator, the easiest (and heaviest) way is to install one through [Android Studio](https://developer.android.com/studio/run/emulator). 

- Install Android Studio and [setup a virtual device](https://docs.expo.io/versions/latest/workflow/android-studio-emulator.html)
- Install a sample Expo project on your host machine (not on Docker). For example, ```create-react-native-app```
- Run the sample app on your emulator with ```npm run android```. This will install the Expo client on your fresh virtual device
- You should now be able to run any Expo app accessible by your virtual device by copying the app's url to the Search tab

## _Web App_ Development Environment Setup
On the root directory, run docker:
```
docker-compose up --build web-app
```

## _Backend/Server_ Development Environment Setup
On the root directory, run docker:
```
docker-compose up --build server
```

## Temporary simulation _Backend API_ (To be completely replaced by end of Sprint 3)
Useful temporary server simulating a backend API, to allow API calls in the frontend.

To run the server do:
* `cd fake-api`
* Edit the _json-server.json_ file and make sure the parameter `host` is set to your IP. You can check your IP in the command line with `ifconfig`.
* `npm install -g json-server`
* `json-server --watch db.json.`

The json server will start at port _host_:3005.

__Note:__ Do not forget to also change variable in the _.env_ file (`api`) to match the host and port defined in the _json-server.json_ file.

Example of _.env_ file content: `api=http://<host>:3005`.