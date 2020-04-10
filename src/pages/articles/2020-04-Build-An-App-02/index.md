---
title: "Let's build an app - Part 2"
date: '2020-04-06T20:00:00.000Z'
layout: post
path: '/articles/build-an-app-02/'
category: 'JavaScript'
description: "Bored at home? Join me learning how to build a small, but complete app in 2020. We'll build the basic functionality of our React Native app."
author: '@kriswep'
readNext: '/articles/2020-03-Build-An-App-01/'
issueNumber: 28
---

## Bored at home? Learn how to build a native app from scratch using React Native.

**In this multipart series we'll develop a native app from Scratch.**

![First screen of the app we'll build. There are two fields to select the currencies and two inputs to enter the corresponding values. They are aligned centrally on the screen.](app-iphone.jpg)

### Fetch Data

### Done

So, we finished the main functionality of our app. We can specify the currencies, enter values and see the converted amount.

This is what we have for now:

```jsx
// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useQuery } from 'react-query';

export default function App() {
  const [base, setBase] = useState('EUR');
  const [target, setTarget] = useState('USD');

  const [baseAmount, setBaseAmount] = useState('1');
  const [targetAmount, setTargetAmount] = useState('0');

  const { _, data, error } = useQuery(
    ['latest', base, target],
    fetchCurrencies,
  );

  useEffect(() => calculateFromBase(baseAmount), [data]);

  const calculateFromBase = number => {
    if (!isNaN(number) && data && data.rates) {
      setBaseAmount(number);
      const newTargetAmount = (number * data.rates[target]).toFixed(2);
      setTargetAmount(isNaN(newTargetAmount) ? 0 : newTargetAmount);
    }
  };
  const calculateFromTarget = number => {
    if (!isNaN(number) && data && data.rates) {
      const newBaseAmount = (number / data.rates[target]).toFixed(2);
      setBaseAmount(isNaN(newBaseAmount) ? 0 : newBaseAmount);
      setTargetAmount(number);
    }
  };

  return (
    <View style={styles.container}>
      {error && <Text>Uh Oh, an error happened...</Text>}

      <>
        <View style={styles.currencyContainer}>
          <TextInput
            autoCapitalize="characters"
            style={styles.currency}
            value={base}
            onChangeText={setBase}
          />
          <TextInput
            style={styles.currencyAmount}
            keyboardType="numeric"
            value={baseAmount}
            onChangeText={calculateFromBase}
          />
        </View>
        <View style={styles.currencyContainer}>
          <TextInput
            autoCapitalize="characters"
            style={styles.currency}
            value={target}
            onChangeText={setTarget}
          />
          <TextInput
            style={styles.currencyAmount}
            keyboardType="numeric"
            value={targetAmount}
            onChangeText={calculateFromTarget}
          />
        </View>
      </>
    </View>
  );
}

const fetchCurrencies = async (_, base, target) => {
  const res = await fetch(
    `https://api.ratesapi.io/api/latest?base=${base}&symbols=${target}`,
  );

  return await res.json();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  currencyContainer: {
    flexBasis: 150,
    margin: 12,
  },
  currency: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  currencyAmount: {
    fontSize: 24,
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 12,
  },
});
```

Hope you could follow along. In the next part we'll do some cleaning up and introduce further components. Follow me on [twitter](https://twitter.com/kriswep) where I'll announce the next part. Also, please leave a comment telling me your opinions.
