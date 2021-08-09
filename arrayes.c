#include <stdio.h>
#include <stdlib.h>
int main(void)
{
    int a[5];
    print("enter values:");

    for (i = 0; i < 5; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("enterd values :");
    for (i = 0; i < 5; i++)
    {
        printf("%d", a[i]);
    }
}