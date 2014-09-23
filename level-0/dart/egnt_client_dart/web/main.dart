import 'package:angular/angular.dart';
import 'package:angular/application_factory.dart';
import 'package:egnt_client_dart/egnt.dart';



void main() {
  applicationFactory().addModule(new EgntModule()).run();
}

