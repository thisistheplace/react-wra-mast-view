"""Parse JSON schema and auto generate React hooks from the data

Usage:
------
    python parse.py
"""
import jsonpath_ng as jp
import json
import os
from pathlib import Path
import shutil

root = Path("src/model")
if root.exists():
    shutil.rmtree(root)
root.mkdir()

schema = json.loads(open("schema/iea43_wra_data_model.schema.json", "r").read())

expr = jp.parse('$..*')

output = {}
for m in expr.find(schema):
    # Show a json path
    output[str(m.full_path)] = m.value

# Create react hooks
for jpath, v in output.items():
    # Skip if dict since each key/value will be specified against the more
    # specific sub-path
    if isinstance(v, dict):
        pass
    thispath = root / Path(os.path.join(*jpath.split(".")))
    if not thispath.exists():
        print(thispath)
        thispath.mkdir(parents=True)

    