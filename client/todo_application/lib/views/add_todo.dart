import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_application/provider/todo_provider.dart';

TextEditingController titleController = TextEditingController();
TextEditingController descriptionController = TextEditingController();
addDataWidget(BuildContext context) {
  return showModalBottomSheet(
    enableDrag: true,
    context: context,
    builder: (context) {
      return SizedBox(
        height: 300,
        width: 400,
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              TextField(
                controller: titleController,
                decoration: const InputDecoration(
                  hintText: "Add Title",
                ),
              ),
              TextField(
                controller: descriptionController,
                decoration: const InputDecoration(
                  hintText: "Add Description",
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  if (titleController.text.isNotEmpty &&
                      descriptionController.text.isNotEmpty) {
                    Provider.of<TodoProvider>(context, listen: false).addData({
                      "title": titleController.text,
                      "description": descriptionController.text
                    });
                  }
                  ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text("Posted Successfully")));
                  titleController.clear();
                  descriptionController.clear();
                },
                child: const Text("SUBMIT"),
              ),
            ],
          ),
        ),
      );
    },
  );
}
