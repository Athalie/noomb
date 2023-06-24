import { createStyles, Image } from '@mantine/core';
import coatOfArms from 'assets/images/coat_of_arms.png';
import companyLogo from 'assets/images/company_logo.png';
import flag from 'assets/images/flag.png';

const useStyles = createStyles({
  imageBlock: {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: '24px',
    alignItems: 'center',
  },
  coatOfArms: {
    paddingRight: '24px',
    borderRight: '1px solid rgba(35, 38, 47, 0.1)',
  },
  companyLogo: {
    padding: '13px 24px',
    borderRight: '1px solid rgba(35, 38, 47, 0.1)',
  },
  flag: {
    paddingLeft: '24px',
  },
});

export const NoombCreds = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.imageBlock}>
      <div className={classes.coatOfArms}>
        <Image width={150} height={63} src={coatOfArms} alt="Coat of arms" />
      </div>
      <div className={classes.companyLogo}>
        <Image width={148} height={36} src={companyLogo} alt="Company Logo" />
      </div>
      <div className={classes.flag}>
        <Image width={63} height={46} src={flag} alt="Flag" />
      </div>
    </div>
  );
};
