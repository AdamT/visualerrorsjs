VisualErrorsJS
==============

### Get immidiate feedback on javascript errors.
When there's an error in the js, the `onerror` will replace the DOM body
with the error. That's it. No more programming till you fix it.

How to use it
-------------
1. Add visualerrors.js to your project.
2. Insert visualerrors.js `<script type='text/javascript' src='visualerrors.js'></script>` into the html page
3. Win

------

    <!DOCTYPE html>
    <html>
        <head>
            <title>Visual Errors</title>
        </head>

    <body>
        <script type='text/javascript' src='visualerrors.js'></script>

        <h1>Visual Errors</h1>
        <p>You won't see this!</p>

        <script type='text/javascript'>
            // SyntaxError
            alert('hello worl
        </script>
    </body>

    </html>




Browser Compatibility
---------------------
It's vanilla js so it should work on all major browsers.

Contributing?
------------
Check out the TODO's. Fork and submit a pull request.

TODO's
------
* Styling
* Adding a stacktrace
* Any ideas? Let me know

LICENSE
-------
*Really? Does it need a license? Well, here ya go:*

The MIT License (MIT)

Copyright (c) 2013, Adam Tal

Permission is hereby granted, free of charge, to any person obtaining a
copy
of this software and associated documentation files (the "Software"), to
deal
in the Software without restriction, including without limitation the
rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN
THE SOFTWARE.

