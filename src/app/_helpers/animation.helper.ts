import { NavOptions, createAnimation, Animation } from '@ionic/core';

interface TransitionOptions extends NavOptions {
  progressCallback?: (ani: Animation | undefined) => void;
  baseEl: any;
  enteringEl: HTMLElement;
  leavingEl: HTMLElement | undefined;
}


export class AnimationHelper {
  static pageTransition(_: HTMLElement, opts: TransitionOptions) {
    const DURATION = 300;
  
    // root animation with common setup for the whole transition
    const rootTransition = createAnimation()
      .duration(opts.duration || DURATION)
      .easing('cubic-bezier(0.3,0,0.66,1)');
  
    // ensure that the entering page is visible from the start of the transition
    const enteringPage = createAnimation()
      .addElement(getIonPageElement(opts.enteringEl))
      .beforeRemoveClass('ion-page-invisible');
  
    // create animation for the leaving page
    const leavingPage = createAnimation().addElement(
      getIonPageElement(opts.leavingEl)
    );
  
    // actual customized animation
    if (opts.direction === 'forward') {
      //enteringPage.fromTo('transform', 'translateX(100%)', 'translateX(0)');
      enteringPage.fromTo('opacity', '0.25', '1');
      leavingPage.fromTo('opacity', '1', '0.25');
    } else {
      //leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)');
      leavingPage.fromTo('opacity', '1', '0.25');
      enteringPage.fromTo('opacity', '0.25', '1');
    }
  
    // include animations for both pages into the root animation
    rootTransition.addAnimation(enteringPage);
    rootTransition.addAnimation(leavingPage);
    return rootTransition;
  }

  static enteringPage(baseEl: HTMLElement, opts?: any): Animation{
    const animation = createAnimation()
      .easing('ease-in-out')
      .duration(300)
      .addElement(baseEl)
      .addElement(baseEl.querySelector('.modal-wrapper'))
      .beforeStyles({transform: 'none'})
      .fromTo('opacity', '0.25', '1');
    return animation;
  }
  static leavingPage(baseEl: HTMLElement, opts?: any): Animation{
    const animation = createAnimation()
      .easing('ease-in-out')
      .duration(300)
      .addElement(baseEl)
      .addElement(baseEl.querySelector('.modal-wrapper'))
      .fromTo('opacity', '1', '0.25');
    return animation;
  }
}

function getIonPageElement(element: HTMLElement) {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(
    ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
  );
  if (ionPage) {
    return ionPage;
  }

  return element;
}