import {ProductsService} from "./products.service";
import {FavoritesService} from "./favorites.service";

export function favoritesFactory(isFavorite: boolean): () => ProductsService {
  return () => isFavorite ? new FavoritesService() : new ProductsService();
}
