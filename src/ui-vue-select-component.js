export default {
  model: {
    event: 'change'
  },
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    items: {
      type: Array
    },
    searchKeys: {
      type: Array
    },
    required: {
      type: Boolean
    },
    multiple: {
      type: Boolean
    },
    limit: {
      type: Number
    }
  },
  data() {
    return {
      isOpened: false,
      selected: new Set(),
      search: null
    };
  },
  computed: {
    searchItems: {
      get() {
        return this.searchFilter(this.items);
      },
      set(value) {
        // this.$emit('update:items', value)
      }
    },
    searchText: {
      get() {
        return this.search;
      },
      set(value) {
        this.search = value;
      }
    },
    isRequired: {
      get() {
        return this.required || false;
      }
    }
  },
  methods: {
    fetchFromObject(obj, prop) {
      if (typeof obj === 'undefined') {
        return false;
      }
      var _index = prop.indexOf('.');
      if (_index > -1) {
        return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
      }
      return obj[prop];
    },
    searchFilter(items) {
      const result = items;
      if (!this.searchText) {
        return result;
      }

      const filterValue = this.searchText.toLowerCase();

      const filter = item => {
        if (item === null || item === undefined) {
          return false;
        }
        if (typeof item === 'object') {
          for (let i = 0; i < this.searchKeys.length; ++i) {
            const searchValue = this.fetchFromObject(item, this.searchKeys[i]);
            if (
              searchValue &&
              searchValue
                .toString()
                .toLowerCase()
                .includes(filterValue)
            ) {
              return true;
            }
          }
          return false;
        }
        return item
          .toString()
          .toLowerCase()
          .includes(filterValue);
      };
      return result.filter(filter);
    },
    selectItem(item) {
      if (this.multiple) {
        if (this.selected.has(item)) {
          // TODO: NOTIFY IF REQUIRED
          this.selected.delete(item);
          this.$emit('change', Array.from(this.selected));
          this.isOpened = false;
        } else {
          // TODO: NOTIFY IF LIMIT
          if (!this.limit || this.selected.size < this.limit) {
            this.selected.add(item);
            this.$emit('change', Array.from(this.selected));
            this.isOpened = false;
          }
        }
      } else {
        this.selected = item;
        this.$emit('change', this.selected);
        this.isOpened = false;
      }
    },
    openSelect() {
      this.isOpened = !this.isOpened;
      this.$nextTick(() => {
        this.$refs.selectSearch.focus();
      });
    },
    onSearch(event) {
      this.searchText = event.target.value;
    },
    checkActive(item) {
      if (this.multiple) {
        return this.selected.has(item);
      } else {
        return this.selected == item;
      }
    }
  },
  mounted() {
    if (this.isRequired && this.items.length > 0) {
      if (this.multiple) {
        this.selected = new Set([this.items[0]]);
        this.$emit('change', Array.from(this.selected));
      } else {
        this.selected = this.items[0];
        this.$emit('change', this.selected);
      }
    }
  }
};
