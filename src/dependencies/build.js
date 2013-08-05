builder.addModule({
    name: 'jQuery',
    type: 'library',
    link: 'http://jquery.com/',
    files: [
//        __dirname + '/jquery.js'
    ]
});

builder.addModule({
    name: 'jQuery UI',
    type: 'library',
    link: 'http://jqueryui.com/',
    files: [
//        __dirname + '/jquery-ui.js'
    ],
    depends: [
        'jQuery'
    ]
});

builder.addModule({
    name: 'jQuery Hotkeys',
    type: 'library',
    link: 'https://github.com/jeresig/jquery.hotkeys/',
    files: [
        __dirname + '/jquery-hotkeys.js'
    ],
    depends: [
        'jQuery'
    ]
});

builder.addModule({
    name: 'ResizeTable',
    type: 'library',
    link: 'https://code.google.com/p/resizetable-js/',
    files: [
        __dirname + '/jquery-hotkeys.js'
    ]
});

builder.addModule({
    name: 'GoogTable',
    type: 'library',
    link: 'https://code.google.com/p/closure-library/source/browse/closure/goog/editor/table.js',
    files: [
        __dirname + '/goog-table.js'
    ]
});

builder.addModule({
    name: 'Diff',
    type: 'library',
    link: 'http://code.google.com/p/google-diff-match-patch/',
    files: [
        __dirname + '/diff.js'
    ]
});
