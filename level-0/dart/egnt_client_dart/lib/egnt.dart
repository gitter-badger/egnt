library egnt_client_dart;

import 'package:angular/angular.dart';

part 'component/console.dart';
part 'domain/level.dart';


class EgntModule extends Module {
  EgntModule() {
    bind(ConsoleComponent);
  }
}
