import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_application/provider/todo_provider.dart';
import 'package:todo_application/views/add_todo.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  void initState() {
    Provider.of<TodoProvider>(context, listen: false).fetchData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var provider = Provider.of<TodoProvider>(context);
    return Scaffold(
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          addDataWidget(context);
        },
        child: const Icon(Icons.add),
      ),
      appBar: AppBar(
        title: const Text("TODO LIST"),
        centerTitle: true,
      ),
      body: Consumer<TodoProvider>(builder: (context, model, _) {
        return StreamBuilder(
          stream: provider.fetchData().asStream(),
          builder: (BuildContext context, snapshot) {
            if (snapshot.hasError) {
              return const Text('Something went wrong');
            }

            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }

            return ListView.builder(
              itemCount: model.todoData?.length,
              itemBuilder: (context, int index) {
                return ListTile(
                  title: Text(model.todoData![index]["title"]),
                  subtitle: Text(model.todoData![index]["description"]),
                );
              },
            );
          },
        );
      }),
    );
  }
}
