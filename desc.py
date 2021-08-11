def custom_sort(t):
    return t[1]

L = [("Alice", 25), ("Bob", 20), ("Alex", 5)]
L.sort(key=custom_sort)
print(L)

# output
# [('Alex', 5), ('Bob', 20), ('Alice', 25)]