<template>
  <div class="design">
    <h1> design system </h1>
    <div class="design__base-card base-card">
      <div class="base-card__one">
        <h2>Hey! First Card.</h2>
        <div class="divider" />
        <p>Some description.</p>
        <p class="truncate"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusamus officia deserunt tempore
          aliquid labore eum aut. Maiores dolore fugiat magnam cupiditate nulla ipsa nihil tempora, deserunt
          libero excepturi officiis!</p
        >
      </div>

      <div class="base-card__two">
        <h2>Hey! First Shadow Card.</h2>
        <div class="divider" />
        <p>Some description.</p>
      </div>

      <div class="base-card__three">
        <h2>Hey! Second Shadow Card.</h2>
        <div class="divider" />
        <p>Some description.</p>
      </div>

      <div class="base-card__four">
        <h2>Hey! First Glow Card.</h2>
        <div class="divider" />
        <p>Some description.</p>
      </div>

      <div class="base-card__five">
        <h2>Hey! Second Glow Card.</h2>
        <div class="divider" />
        <p>Some description.</p>
      </div>
    </div>
    <button class="button">button</button>
  </div>
</template>

<style lang="scss" scoped>
  @use "sass:color";

  %baseCard {
    // width: 250px;
    width: remify(20);
    height: 250px;
    // border-radius: shape(xl);
    border-radius: shaper(5);
    color: var(--on-primary-container);
    padding: 15px;
  }
  @mixin base-card() {
    width: 400px;
    height: 250px;
    border-radius: shape(xl);
    color: var(--on-primary-container);
    padding: 15px;
  }

  .design {
    border: stroke(narrow) solid;
    padding: space(10);
    color: color(on-surface);
    background-color: var(--on-surface-container);
    @include typography(body-large);
    z-index: zIndex(overlay);
    @include breakpoint-except(medium) {
      background-color: var(--inverse-primary);
    }

    // @include scrollbar($scrollDefaultColor: gray, $scrollHoverColor: darkgray);
  }

  .base-card {
    position: relative;
    @include flex($wrap: wrap, $align: center, $justify: center);
    gap: space(10);
    padding: space(4);

    &__one {
      // @include position($axis: vertical, $top: 0, $right: 0, $bottom: 0, $left: 80px);
      @extend %baseCard;
      @include elevation(lowest);

      @include flex(column, $align: center, $justify: center);
      @include border(horizontal);
      @include stateLayer(hover-state-layer, hover);
    }
    &__two {
      @include base-card;
      @include elevation(normal, normal, "shadow");

      @include flex(column, $align: center, $justify: center);
    }
    &__three {
      @include base-card;
      @include elevation(highest, highest, "shadow");
      @include flex(column, $align: center, $justify: center);
    }
    &__four {
      @include base-card;
      @include elevation(normal, normal, "glow");
      @include flex(column, $align: center, $justify: center);
    }
    &__five {
      @include base-card;
      @include elevation(highest, highest, "glow");

      @include flex(column, $align: center, $justify: center);
    }
  }

  .button {
    height: size(medium);
    background-color: var(--secondary-container);
    padding: space(5);
    @include flex($align: center, $justify: center);
    // @include pseudo($content: "!") {
    //   border: 1px solid red;
    //   width: 20px;
    //   height: 20px;
    // }
  }
  .divider {
    @include divider($direction: horizontal, $size: 2px, $color: color(on-primary-fixed-variant));
  }
  .truncate {
    @extend %truncate;
    max-width: 200px;
  }
</style>
