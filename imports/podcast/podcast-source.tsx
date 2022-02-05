import React from 'react';
import { a, useTransition } from 'react-spring';
import { ICard } from '../../pages/parallax';
import { ButtonBase, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '../framework';


const useStyles = makeStyles(theme => ({
  containerPodcastSource: {
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    zIndex: 11,
  },
  sourcePodcastBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoSourcePodcast: {
    display: 'block',
  },
}));

export const PodcastSource = React.memo(({
  switcher,
  card: { links },
}:{
  switcher?: boolean;
  card: ICard;
}) => {
  const classes = useStyles();

  const transitions = useTransition(!switcher, {
    initial: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    enter: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    leave: { opacity: 1, transform: 'scale(1.2)', pointerEvents: 'all' },
    reverse: switcher,
    trail: 2000,
    expires: false,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });

  // @ts-ignore
  return(<>{transitions((style, item) => (item && <a.div style={style} className={classes.containerPodcastSource}>
      <List>
        {links.map(s => (
          <ListItem key={s.provider.alt} className={classes.sourcePodcastBlock} alignItems='center' aria-label={s.provider.alt}>
            <ButtonBase href={s.href} style={{width: '100%'}} centerRipple>
              <ListItemAvatar>
                <div style={{overflow: 'hidden', width: '2rem', height: '2rem'}}>
                  <img src={s.provider.icon} alt={s.provider.alt} width='100%' height='100%' className={classes.logoSourcePodcast} />
                </div>
              </ListItemAvatar>
              <ListItemText primary={s.provider.title} />
            </ButtonBase>
          </ListItem>
        ))}
      </List>
    </a.div>))}</>
  )
})