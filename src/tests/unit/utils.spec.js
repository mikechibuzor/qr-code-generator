import { mount } from "@vue/test-utils";
import HomePage from "../../components/screens/HomePage.vue";

describe("HomePage Component unit test", () => {
  test("renders the HomePage component", () => {
    const $store = {
      getters: jest.fn(),
    };
    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $store,
        },
      },
      shallow: true,
    });
    expect(wrapper.classes()).toContain("wrapper");
  });
});

describe("Validate Entered URL", () => {
  test("validates the userEnteredUrl to be true", async () => {
    const $store = {
      getters: jest.fn(),
    };
    const wrapper = mount(HomePage, {
      global: {
        mocks: {
          $store,
        },
      },
      shallow: true,
    });

    wrapper.setData({ userEnteredUrl: "www.nairaland.com" });
    await wrapper.find('[data-test="button"]').trigger("click");

    expect(wrapper.find('[data-test="test"]').text()).toBe("true");
  });
});
