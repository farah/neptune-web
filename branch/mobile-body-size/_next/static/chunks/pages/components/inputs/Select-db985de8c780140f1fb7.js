_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[65],{"+JZ1":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Select",function(){return t("0c+Z")}])},"0c+Z":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return h})),t.d(n,"default",(function(){return p}));var a=t("cxan"),o=t("HbGN"),r=t("ERkP"),c=t.n(r),i=t("ZVZ0"),l=t("Qi1R"),s=t("RmhF"),d=t("/Vl7"),h=(c.a.createElement,{name:"Select"}),u={meta:h};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:"() => {\n  const [selected, setSelected] = React.useState({\n    value: 0,\n    label: 'A thing',\n    note: 'with a note',\n  });\n\n  return (\n    <Select\n      size=\"md\"\n      placeholder=\"Placeholder\"\n      dropdownRight=\"xs\"\n      dropdownWidth=\"lg\"\n      inverse={false}\n      block\n      selected={selected}\n      disabled={false}\n      onChange={(v) => setSelected(v)}\n      required={false}\n      searchPlaceholder=\"Search placeholder\"\n      dropdownUp={false}\n      /**\n       * Search Parameter:\n       *\n       * if `true` default search functionality being enabled\n       * (not case sensitive search in option labels & currency props)\n       *\n       * if `function` you can define your own search function\n       * to implement custom search experience.\n       * This search function used while filtering the options array.\n       * The custom search function takes two parameters.\n       * First is the option the second is the keyword.\n       */\n      search\n      options={[\n        { header: 'Basic' },\n        { value: 0, label: 'A thing', note: 'with a note' },\n        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },\n        { value: 2, label: 'A disabled thing', disabled: true },\n        { header: 'Icons' },\n        { value: 3, label: 'Profile', icon: <ProfileIcon /> },\n        { value: 4, label: 'Globe', icon: <GlobeIcon /> },\n        { header: 'Currencies' },\n        { value: 5, label: 'British pound', currency: 'gbp' },\n        { value: 6, label: 'Euro', currency: 'eur' },\n        { separator: true },\n        { value: 7, label: 'Something else' },\n        { header: 'Options with searchable alternatives' },\n        {\n          value: 8,\n          label: 'A thing with searchable alternatives',\n          /**\n           * searchStrings is an array of strings that maps additional searchable terms to a given option.\n           */\n          searchStrings: ['abbreviation', 'acronym', 'nickname'],\n        },\n      ]}\n    />\n  );\n};\n",scope:{Select:s.a,GlobeIcon:d.l,ProfileIcon:d.r},display:"vertical",mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"Select",mdxType:"GeneratePropsTable"}))}p.isMDXComponent=!0}},[["+JZ1",0,1,2,6,3,5,7,8,9,10,4]]]);