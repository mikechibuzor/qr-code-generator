import { mount } from "@vue/test-utils";
import store from "../../../../store/store.js";
import HomePage from "../../../../components/screens/HomePage.vue";

/*
================================================================================================================================================ 
======================================================= VALIDATION =============================================================================
================================================================================================================================================ 
 */
describe(" Validate Entered URL 1", () => {
  test("validates the userEnteredUrl to be true", async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [store],
      },
      shallow: true,
    });

    wrapper.setData({ userEnteredUrl: "www.nairaland.com" });
    await wrapper.find('[data-test="button"]').trigger("click");

    expect(wrapper.find('[data-test="test"]').text()).toBe("true");
  });
});

describe(" Validate Entered URL 2", () => {
  test("validates the userEnteredUrl to be true", async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [store],
      },
      shallow: true,
    });

    wrapper.setData({ userEnteredUrl: "https://www.linkedin.com" });
    await wrapper.find('[data-test="button"]').trigger("click");

    expect(wrapper.find('[data-test="test"]').text()).toBe("true");
  });
});

describe(" Validate Entered URL 3", () => {
  test("validates the userEnteredUrl to be false", async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [store],
      },
      shallow: true,
    });

    wrapper.setData({ userEnteredUrl: "nairaland" });
    await wrapper.find('[data-test="button"]').trigger("click");

    expect(wrapper.find('[data-test="test"]').text()).toBe("false");
  });
});

describe(" Validate Entered URL 4", () => {
  test("validates the userEnteredUrl to be false", async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [store],
      },
      shallow: true,
    });

    wrapper.setData({ userEnteredUrl: "6" });
    await wrapper.find('[data-test="button"]').trigger("click");

    expect(wrapper.find('[data-test="test"]').text()).toBe("false");
  });
});

/*
================================================================================================================================================ 
====================================================== ATTACH DISABLE CLASS======================================================================
================================================================================================================================================ 
 */

describe("Disable Class", () => {
  test("returns an object with property 'disable-class' and value 'true' ", () => {
    // //   increasse history counter upto 10
    // for (let i = 0; i < 10; i++) {
    //   store.dispatch("historyCounterIncrease");
    // }

    const $store = {
      state: {
        historyCounter: 10,
      },
      getters: {
        historyCounter() {
          return state.historyCcounter;
        },
      },
    };

    const wrapper = mount(HomePage, {
      mocks: {
        $store,
      },
      shallow: true,
    });

    expect(wrapper.find("button").classes()).toContain("disable-button");
  });
});
