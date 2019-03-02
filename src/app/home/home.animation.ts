import {
  animate,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const cellHeight = '245px';
const paddingTop = '300px';

const listToMapAnimationTiming = '1000ms ease-out';
const voidToEnterTiming = '250ms ease-out';

const mapModeBaseStyles = {
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  maxHeight: cellHeight,
  paddingTop: '0',
  overflow: 'auto',
};

const listModeBaseStyles = {
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  paddingTop,
  maxHeight: '100%',
  overflow: 'auto',
};

export const homeAnimations = [
  trigger('mapAnimation', [
    state(
      'map',
      style({
        ...mapModeBaseStyles,
      }),
    ),

    state(
      'list',
      style({
        ...listModeBaseStyles,
      }),
    ),

    transition('list => void', [
      query(
        ':self',
        animate(
          voidToEnterTiming,
          keyframes([
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
            style({
              transform: 'translate3d(0, 100vh, 0)',
            }),
          ]),
        ),
      ),
    ]),

    transition('void => list', [
      query(
        ':self',
        animate(
          voidToEnterTiming,
          keyframes([
            style({
              ...listModeBaseStyles,
              transform: 'translate3d(0, 100vh, 0)',
            }),
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
          ]),
        ),
      ),
    ]),

    transition('map => void', [
      query(
        ':self',
        animate(
          voidToEnterTiming,
          keyframes([
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
            style({
              transform: 'translate3d(100vw, 0, 0)',
            }),
          ]),
        ),
      ),
    ]),

    transition('void => map', [
      query(
        ':self',
        animate(
          voidToEnterTiming,
          keyframes([
            style({
              ...mapModeBaseStyles,
              transform: 'translate3d(100vw, 0, 0)',
            }),
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
          ]),
        ),
      ),
    ]),

    transition('map => list', [
      query(
        ':self',
        animate(
          listToMapAnimationTiming,
          keyframes([
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
            style({
              transform: 'translate3d(100vw, 0, 0)',
            }),
            style({
              transform: 'translate3d(100vw, 100vh, 0)',
            }),
            style({
              ...listModeBaseStyles,
              transform: 'translate3d(0, 100vh, 0)',
            }),
            style({
              transform: 'translate3d(0, -64px, 0)',
            }),
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
          ]),
        ),
      ),
    ]),

    transition('list => map', [
      query(
        ':self',
        animate(
          listToMapAnimationTiming,
          keyframes([
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
            style({
              transform: 'translate3d(0, 100vh, 0)',
            }),
            style({
              transform: 'translate3d(100vw, 100vh, 0)',
            }),
            style({
              ...mapModeBaseStyles,
              transform: 'translate3d(100vw, 0, 0)',
            }),
            style({
              transform: 'translate3d(-256px, 0, 0)',
            }),
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
          ]),
        ),
      ),
    ]),
  ]),
];
