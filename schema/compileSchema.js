// Copied from:
// https://ajv.js.org/standalone.html

const fs = require("fs")
const path = require("path")
const Ajv = require("ajv")
const addFormats = require('ajv-formats').default;
const deref = require('json-schema-deref');
const standaloneCode = require("ajv/dist/standalone").default
let mySchema = require('./iea43_wra_data_model.schema.json')

// Dereference the schema so we don't get circular imports when we convert the
// schema into precompiled validation functions
// The generated code will have a default export:
// `module.exports = <validateFunctionCode>;module.exports.default = <validateFunctionCode>;`
deref(mySchema, function(err, fullSchema) {
  console.log(fullSchema)
  const ajv = new Ajv({code: {source: true}, strict: "log"})
  addFormats(ajv)
  const validate = ajv.compile(fullSchema)
  let moduleCode = standaloneCode(ajv, validate)

  // Now you can write the module code to file
  fs.writeFileSync(path.join(__dirname, "./wra_datamodel.js"), moduleCode)
})