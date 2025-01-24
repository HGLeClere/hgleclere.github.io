
# Nike Store Entity Relationship Diagram 

```mermaid
erDiagram
    CUSTOMER ||--o{ SALES
    CUSTOMER {
        PK ID
        Key name
        Key address
        
    }
    SALES ||--|{ Product
    SALES {
        PK ID
        Key orderNumber
        FK Product_ID
    }
    Product ||--|{ Inventory
    Product {
        PK Product_ID
        Key Size
        Key Color
    }
    Inventory ||--o{ Product
    Inventory {
        FK Product_ID
        Key NumberInStock
    }
```
