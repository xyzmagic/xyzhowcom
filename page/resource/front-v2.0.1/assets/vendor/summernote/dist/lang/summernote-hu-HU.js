(function($) {
  $.extend($.summernote.lang, {
    'hu-HU': {
      font: {
        bold: 'F茅lk枚v茅r',
        italic: 'D艖lt',
        underline: 'Al谩h煤zott',
        clear: 'Form谩z谩s t枚rl茅se',
        height: 'Sork枚z',
        name: 'Bet疟t铆pus',
        strikethrough: '脕th煤zott',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Bet疟m茅ret'
      },
      image: {
        image: 'K茅p',
        insert: 'K茅p besz煤r谩sa',
        resizeFull: '脕tm茅retez茅s teljes m茅retre',
        resizeHalf: '脕tm茅retez茅s fel茅re',
        resizeQuarter: '脕tm茅retez茅s negyed茅re',
        floatLeft: 'Igaz铆t谩s balra',
        floatRight: 'Igaz铆t谩s jobbra',
        floatNone: 'Igaz铆t谩s t枚rl茅se',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Ide h煤zhat k茅pet vagy sz枚veget',
        dropImage: 'Engedje el a k茅pet vagy sz枚veget',
        selectFromFiles: 'F谩jlok kiv谩laszt谩sa',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'K茅p URL c铆me',
        remove: 'K茅p t枚rl茅se',
        original: 'Original'
      },
      video: {
        video: 'Vide贸',
        videoLink: 'Vide贸 hivatkoz谩s',
        insert: 'Vide贸 besz煤r谩sa',
        url: 'Vide贸 URL c铆me',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion vagy Youku)'
      },
      link: {
        link: 'Hivatkoz谩s',
        insert: 'Hivatkoz谩s besz煤r谩sa',
        unlink: 'Hivatkoz谩s megsz眉ntet茅se',
        edit: 'Szerkeszt茅s',
        textToDisplay: 'Megjelen铆tend艖 sz枚veg',
        url: 'Milyen URL c铆mre hivatkozzon?',
        openInNewWindow: 'Megnyit谩s 煤j ablakban'
      },
      table: {
        table: 'T谩bl谩zat',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Elv谩laszt贸 vonal besz煤r谩sa'
      },
      style: {
        style: 'St铆lus',
        p: 'Norm谩l',
        blockquote: 'Id茅zet',
        pre: 'K贸d',
        h1: 'Fejl茅c 1',
        h2: 'Fejl茅c 2',
        h3: 'Fejl茅c 3',
        h4: 'Fejl茅c 4',
        h5: 'Fejl茅c 5',
        h6: 'Fejl茅c 6'
      },
      lists: {
        unordered: 'Listajeles lista',
        ordered: 'Sz谩mozott lista'
      },
      options: {
        help: 'S煤g贸',
        fullscreen: 'Teljes k茅perny艖',
        codeview: 'K贸d n茅zet'
      },
      paragraph: {
        paragraph: 'Bekezd茅s',
        outdent: 'Beh煤z谩s cs枚kkent茅se',
        indent: 'Beh煤z谩s n枚vel茅se',
        left: 'Igaz铆t谩s balra',
        center: 'Igaz铆t谩s k枚z茅pre',
        right: 'Igaz铆t谩s jobbra',
        justify: 'Sorkiz谩rt'
      },
      color: {
        recent: 'Jelenlegi sz铆n',
        more: 'Tov谩bbi sz铆nek',
        background: 'H谩tt茅rsz铆n',
        foreground: 'Bet疟sz铆n',
        transparent: '脕tl谩tsz贸',
        setTransparent: '脕tl谩sz贸s谩g be谩ll铆t谩sa',
        reset: 'Vissza谩ll铆t谩s',
        resetToDefault: 'Alaphelyzetbe 谩ll铆t谩s'
      },
      shortcut: {
        shortcuts: 'Gyorsbillenty疟',
        close: 'Bez谩r谩s',
        textFormatting: 'Sz枚veg form谩z谩sa',
        action: 'M疟velet',
        paragraphFormatting: 'Bekezd茅s form谩z谩sa',
        documentStyle: 'Dokumentumst铆lus',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': '脷j bekezd茅s',
        'undo': 'Visszavon谩s',
        'redo': '脷jra',
        'tab': 'Beh煤z谩s n枚vel茅se',
        'untab': 'Beh煤z谩s cs枚kkent茅se',
        'bold': 'F茅lk枚v茅rre 谩ll铆t谩s',
        'italic': 'D艖ltre 谩ll铆t谩s',
        'underline': 'Al谩h煤z谩s',
        'strikethrough': '脕th煤z谩s',
        'removeFormat': 'Form谩z谩s t枚rl茅se',
        'justifyLeft': 'Balra igaz铆t谩s',
        'justifyCenter': 'K枚z茅pre igaz铆t谩s',
        'justifyRight': 'Jobbra igaz铆t谩s',
        'justifyFull': 'Sorkiz谩rt',
        'insertUnorderedList': 'Sz谩mozatlan lista be/ki',
        'insertOrderedList': 'Sz谩mozott lista be/ki',
        'outdent': 'Jelenlegi bekezd茅s beh煤z谩s谩nak megsz眉ntet茅se',
        'indent': 'Jelenlegi bekezd茅s beh煤z谩sa',
        'formatPara': 'Blokk form谩z谩sa bekezd茅sk茅nt (P tag)',
        'formatH1': 'Blokk form谩z谩sa, mint Fejl茅c 1',
        'formatH2': 'Blokk form谩z谩sa, mint Fejl茅c 2',
        'formatH3': 'Blokk form谩z谩sa, mint Fejl茅c 3',
        'formatH4': 'Blokk form谩z谩sa, mint Fejl茅c 4',
        'formatH5': 'Blokk form谩z谩sa, mint Fejl茅c 5',
        'formatH6': 'Blokk form谩z谩sa, mint Fejl茅c 6',
        'insertHorizontalRule': 'V铆zszintes vonal besz煤r谩sa',
        'linkDialog.show': 'Link p谩rbesz茅dablak megjelen铆t茅se'
      },
      history: {
        undo: 'Visszavon谩s',
        redo: '脷jra'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });
})(jQuery);
