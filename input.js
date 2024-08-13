let obj = JSON.parse($response.body);
obj.data.anchor["userHas"] = 1
$done({body: JSON.stringify(obj)});