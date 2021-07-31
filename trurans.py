def sort_by_price_ascending(value):
    return value["price"]
items=[
{
"name":"eggs",
"price":1
},
{
"name":"coffee",
"price":9.99
},
{
"name":"rice",
"price":4.04
}
]

    
sortedItems = sorted(items, key=sort_by_price_ascending)
print(sortedItems)