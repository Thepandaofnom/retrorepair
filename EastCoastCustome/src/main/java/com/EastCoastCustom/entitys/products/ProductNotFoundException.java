package eccc;

class ProductNotFoundException extends RuntimeException {

  ProductNotFoundException(Long id) {
    super("Could not find Product " + id);
  }
}