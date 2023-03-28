import { useSelector } from 'react-redux';
import { IDialog, IMessage } from '../../../api/contracts';
import { RootState } from '../../../store/store';
import { DialogCard } from '../DialogCard/DialogCard';
import styles from './DialogsMenu.module.scss';

interface IProps {
  dialogs: IDialog[];
  selectedDialog: string;
  selectDialog: (name: string) => void;
}

export const DialogsMenu: React.FC<IProps> = ({
  dialogs,
  selectedDialog,
  selectDialog,
}) => {
  const mappedDialogs = dialogs.map(el => {
    return (
      <DialogCard
        info={el}
        key={el.id}
        selectedDialog={selectedDialog}
        selectDialog={selectDialog}
      />
    );
  });

  return (
    <div className={styles.first_collumn}>
      <div className={styles.header}>header</div>
      {mappedDialogs}
    </div>
  );
};
