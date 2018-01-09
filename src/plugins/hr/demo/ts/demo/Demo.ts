/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import HrPlugin from 'tinymce/plugins/hr/Plugin';

declare let tinymce: any;

HrPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../js/tinymce/skins/lightgray",
  plugins: "hr code",
  toolbar: "hr code",
  height: 600
});