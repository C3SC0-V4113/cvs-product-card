# CVS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Francisco Valle

## Ejemplo

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "cvs-product-card";
```

```
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
