import { useSelector } from 'react-redux';
import { IDialog, IMessage } from '../../../api/contracts';
import { RootState } from '../../../store/store';
import { DialogCard } from '../DialogCard/DialogCard';
import styles from './DialogsMenu.module.scss';

interface IProps {
  dialogs: IDialog[];
}

export const DialogsMenu: React.FC<IProps> = ({ dialogs }) => {
  const { infoAboutMe } = useSelector((state: RootState) => state.app);

  const mappedDialogs = dialogs.map(el => {
   const userId = el.usersId.filter(id => id !== infoAboutMe?.id)[0]
    const lastMessage = el.Messages.at(-1) as IMessage;
    return <DialogCard id={el.id} userId={userId} lastMessage={lastMessage} key={el.id} />;
  });

  return (
    <div className={styles.first_collumn}>
      <div className={styles.header}>header</div>
      {mappedDialogs}
    </div>
  );
};
