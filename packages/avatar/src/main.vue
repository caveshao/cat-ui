<script>
  export default {
    name: "CaAvatar",
    props: {
      size: {
        type: [Number, String],
        validator(val) {
          if (typeof val === "string") {
            return ["large", "medium", "small"].includes(val);
          } else {
          }
          return typeof val === "number";
        }
      },
      shape: {
        Type: String,
        default: "circle",
        validator(val) {
          return ["circle", "square"].includes(val);
        }
      },
      icon: String,
      src: String,
      alt: String,
      srcSet: String,
      error: Function,
      fit: {
        type: String,
        default: "cover"
      }
    },
    data() {
      return {
        isImageExist: true
      };
    },
    computed: {
      avatarClass() {
        const { size, icon, shape } = this;
        let classList = ["ca-avatar"];

        if (size && typeof size === "string") {
          classList.push(`ca-avatar--${size}`);
        }

        if (icon) {
          classList.push("ca-avatar--icon");
        }

        if (shape) {
          classList.push(`ca-avatar--${shape}`);
        }

        return classList.join(" ");
      }
    },
    methods: {
      handleError() {
        const { error } = this;
        const errorFlag = error ? error() : undefined;
        if (errorFlag !== false) {
          this.isImageExist = false;
        }
      },
      renderAvatar() {
        const { icon, src, alt, isImageExist, srcSet, fit } = this;

        if (isImageExist && src) {
          return (
            <img
              src={src}
              alt={alt}
              onError={this.handleError}
              srcSet={srcSet}
              style={{ "object-fit": fit }}
            />
          );
        }

        if (icon) {
          return <i class={icon} />;
        }

        return this.$slots.default;
      }
    },
    render() {
      const { avatarClass, size } = this;

      const sizeStyle =
        typeof size === "number"
          ? {
              height: `${size}px`,
              width: `${size}px`,
              lineHeight: `${size}px`
            }
          : {};

      return (
        <span class={avatarClass} style={sizeStyle}>
          {this.renderAvatar()}
        </span>
      );
    }
  };
</script>
<style scoped>
  .ca-avatar {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: white;
    background-color: #c0c0c4;
  }

  .ca-avatar img {
    display: block;
    height: 100%;
    width: 100%;
  }
  .ca-avatar--circle {
    border-radius: 50%;
  }

  .ca-avatar--square {
    border-radius: 0%;
  }
</style>