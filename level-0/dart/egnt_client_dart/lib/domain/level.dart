part of egnt_client_dart;

class Level {
  
  String id;
  String name;
  
  Level([this.id, this.name]);
  
  factory Level.fromJsonMap(Map json) {
    return new Level(json['id'], json['name']);
  }
  
}
