// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./annalyns-infiltration.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */

export function canExecuteFastAttack(knightIsAwake) {
    return !knightIsAwake;
  }
  
  /**
   * A useful spy captures information, which they can't do if everyone's asleep.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can spy on someone.
   */
  
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
  }
  
  /**
   * You'll get caught by the archer if you signal while they're awake.
   *
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can send a signal to the prisoner.
   */
  
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake;
  }
  
  /**
   * Determine if Annalyn can free the prisoner.
   *
   * There are two scenarios where Annalyn can succeed:
   * 1. If Annalyn has her pet dog and the archer is asleep.
   * 2. If Annalyn does not have her pet dog, the prisoner is awake, and both the knight and archer are asleep.
   *
   * @param {boolean} knightIsAwake - Whether the knight is awake.
   * @param {boolean} archerIsAwake - Whether the archer is awake.
   * @param {boolean} prisonerIsAwake - Whether the prisoner is awake.
   * @param {boolean} petDogIsPresent - Whether Annalyn's pet dog is present.
   *
   * @returns {boolean} True if Annalyn can free the prisoner, otherwise false.
   */
  
  export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
  ) {
    // Scenario 1: Annalyn has the petdog and the archer is sleeping
    const scenarioWithDog = petDogIsPresent && !archerIsAwake;
  
    // Scenario 2: Annalyn don't have the petdog presence, but de prisoner is awake,
    // and they both knight and archer are sleeping
    const scenarioWithoutDog = !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake;
  
    // Annalyn can rescue the prisoner in both scenarios
    return scenarioWithDog || scenarioWithoutDog;
  }
  