import { createStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { whiteColor } from '../../../globalStyles';

const loginPageStyle = ({ spacing, palette }: Theme)
  : StyleRules<string> => createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '350px',
    margin: 'auto',
    marginTop: spacing(30),
    padding: spacing(1),
    position: 'relative',
    border: '1px solid grey',
    background: 'none',
    borderRadius: '5px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100px',
    width: '50%',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '-60px',
    zIndex: 1000,
    background: palette.primary.light,
    color: whiteColor,
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputControl: {
    marginBottom: spacing(2),
  },
  btnContainer: {
    marginTop: spacing(2),
    width: '100%',
    padding: '0',
  },
  button: {
    fontWeight: 400,
    fontSize: '18px',
    textTransform: 'capitalize',
    color: whiteColor,
    width: '100%',
  },
});

export default loginPageStyle;
