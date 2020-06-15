It is an implementation of custom middle ware in asp.net core application.
This application when run and somebody tries to access any file with the url, it will not let it happen.
To check how it works, there is a file named nofileaccess.txt in the root folde. If you try to access it by adding it to root URL you will get unauthorized action error.
If you disable the middleware from the pipeline and try to access it again it will let you see the content of that file.
