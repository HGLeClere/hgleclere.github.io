
# Nike Store Entity Relationship Diagram 

```mermaid
erDiagram
 PRODUCT |<--|< SALE
 Product {
    PK Product_ID
    Key Color
    Key Size
 }

 CUSTOMER ||--|< SALE
 Customer {
    PK Customer_ID
    Key Name
    Key Address

 }
 Sale |<--0< INVENTORY 
 Sale {
    PK ID 
    FK Product_ID
    Key Order Number
 }

 INVENTORY 0<--||PRODUCT
 Inventory {
    FK Product_ID
    Key NumberInStock
 }

```
