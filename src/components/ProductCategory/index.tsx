import { CategoryDTO } from '../../models/category';
import './styles.css';

type Props = {
    category: CategoryDTO;
}

export default function ProductCategory({category} : Props) {
  return <div className="dsc-category">{category.name}</div>;
}
