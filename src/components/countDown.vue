<template>
  <div v-if="loaded && !expired">
    <div class="left-spacing countdown">
      <p>
        {{ displayDays }}
        :
        {{ displayHours }}
        :
        {{ displayMinutes }}
        :
        {{ displaySeconds }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
      expired: false,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.day,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      );
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? "0" + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displaySeconds = this.formatNum(seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      }, 1);
    },
  },
};
</script>

<style scoped>
p {
  font-weight: 600;
}

.countdown {
  color: #130C27;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  transition: 0.2s ease-out;
  font-size: 1rem;
  padding: 10px 20px;
  box-shadow: 0 1px 2px #130c274a;
}
</style>
