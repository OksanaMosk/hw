import { UsersComponent } from '../components/users-components/UsersComponent.tsx';
import { PaginationComponent } from '../components/PaginationComponent.tsx';

export const UsersPage = () => {
  return (
    <div>
      <UsersComponent/>
      <PaginationComponent />
    </div>
  );
}
