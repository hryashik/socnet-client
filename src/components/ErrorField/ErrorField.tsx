import { Icon } from "@mui/material";
import errorIcon from '@mui/icons-material/ReportProblemOutlined';

interface IProps {
  className: any
  errorText: string
}

export const ErrorField: React.FC<IProps> = ({className, errorText}) => {
  return (
    <div className={className}>
      <Icon component={errorIcon} color={'error'} />
      <p>{errorText}</p>
    </div>
  );
};
