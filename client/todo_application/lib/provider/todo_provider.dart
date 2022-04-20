// ignore_for_file: avoid_print

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class TodoProvider extends ChangeNotifier {
  final httpClient = http.Client();
  List<dynamic>? todoData;
  Map<String, String>? customeHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  };

//GET REQUEST
  Future fetchData() async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejsfirstproject.herokuapp.com");
    http.Response response = await httpClient.get(restApiURL);
    final Map parseData = await jsonDecode(response.body.toString());
    todoData = parseData["data"];
  }

//POST REQUEST
  Future addData(Map body) async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejsfirstproject.herokuapp.com/add");

    http.Response response = await httpClient.post(restApiURL,
        headers: customeHeaders, body: jsonEncode(body));

    return response.body;
  }

//DELETE REQUEST
  Future deleteData(String id) async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejsfirstproject.herokuapp.com/delete");
    http.Response response = await httpClient.delete(restApiURL,
        headers: customeHeaders, body: jsonEncode({"_id": id}));
    print(response.body);
    return response.body;
  }

//UPADTE REQUEST(PUT METHOD)
  Future updateData(Map<String, String> data) async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejsfirstproject.herokuapp.com/update");
    http.Response response = await httpClient.delete(restApiURL,
        headers: customeHeaders, body: jsonEncode(data));
    return response.body;
  }
}
