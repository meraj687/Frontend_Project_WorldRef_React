import React, { useRef, useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  CheckBox,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Unorderedlist from 'react-native-unordered-list'
import Animated from 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'
import { CheckTabwithpage } from './CheckTabwithpage'
import MyTabs from './TabBar'

function SplashScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Text
        style={{ height: 100 }}
        onPress={() => {
          navigation.navigate('ProductSelectionScreen')
        }}
      >
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcsAAABuCAMAAAB/esicAAABRFBMVEX///8ZHB8AAAAXGh0PExf39/f09PQAjf0Axv0Ahv0Agf0Ag/0Aif0Afv0Ayf0AkP0AzP0Axf0Alv0Awf0Ar/0AiP1SVFUAvf0AjP0Az/0Amf0Auv0Ak/0AtP0Arf0AfP0Asv0DCg8A1P0AqP0ApP0At/0An/0AnP0Apv0A1/28vb0fIyYAAAgAeP16fH0A3P0wMjTV1daGh4elpqfj4+MAc/1iZGWTlJWfoKFlZ2k3OTu1trbp6elAQkTGx8dWWFlyc3Xn9/8oKi2k8v506v572/7d8f+15f600v7t9f/V6P96yP53r/4Aav2ew/7P9/9g5f6K6/7Z+v9q6f2z9P6h5/6J7v475f1w1P6n3/5V3f2V1v6Y6P580/5ru/7G5/9szP6Tzf5uxP5/v/7E3/6Vyv5ipP5gtP6Jt/681P+wy/6Qu/6+z8UAAAAeWUlEQVR4nO2d+3vTRtaA7dElEBIIIXEgF0AkcVJbcS1b+CrJincbSkpLb3yF0iW0pbTd/f9//+aiuY/kC8k2dHOeZ7fEkkajeXXOnDlzZlQqzSTHz5+/+Oabf3799df//OYf33///NvZLr+SyyHHz3/68ZNPHkH5hMqnUH74+h/fHv/VdbuSGeTbb358dO/evUePRJafUvnhu++vcH4c8vyzRysr9+4xlozmp4J894+/uppXMlFe3Lu5kqHkNDXVxDif/9V1vZICOf5p5SZCqcE00/zhb0XTYfJX1+Q85MXK7ZtIpqf53fd/dZ3PTdxRJpXGxw/zxc3b167d5DDzaH7699RN17OJ+JVLzjIKktpwWMs/4fnKnduQZSFNo2p++t3fw6l1LauMxZ6NZRRQcS+qauLdan0PEMk957PbEOVtgWahaird5t/C0M7LcujViXgFmnJOEjWawMuqWc455/m1jTuEJaY5haGVaf7fhT/Fxcu8LNvAIgIunGWv7lOQuSxfbECUdyjNCYbW2G3+8PFH9+ZnmbXtRbN0O0AgmcPy5RZBOS1No2p+9LGDy84yLHvl8gSWx9e2NjY2ZJrXlG5zZQpD+7Hb2UvO0q0oKA0sT+5sYZYbebo5dbf5z4t8lIuXS86yBcqTWJ5s7G9tZTSnMrSP8rvN7y7yWS5cLjfLwJP6yjKsrHrK2f4+ZlmsmtMGgj5qmJeb5cjmHG04wvTKvnLGyf4+hWmiOaVH+8nfwsxeapaCWlp+3KpFUOQzjrd29j+I5t8J5qVm2fUZSq9trN7Gw50dkeYUhjaPJsX58Xqzl5plbDOU5ru8WtvZkWGeg0f70QZnLzNLhzmxoGs+Y2Pt4cNimmpYbwon6KONGVxmlgm9hzWOzGesQZYE5gd2m+L45KPtMS8zS3YPLzWfcHwfw9Rpbii6Sf6/cLTJVfPrC3ugC5bLzJK5PqCdcwZkKajmTp5qXnv54tvnL17eni6sd6WXFyAtb9I9NijMIkO78TLzZp7cvD2NE/TX9ZcuGnS5c08IT8XSITcRf/pgllmZRS8QZ5nknPFkd21tAk2Ikp3+/OY0c5t/jR8bDVv9ymBcHg8qaWs4A89o2G31h+hfk1kGvcYoxvdo9HibTsky6bUaqVawO2ylsN71ejPuNPLrzVkGeads3b9fQBPDvC2weXJn4mjz0TdFz4MltbN5eCvVjrl+dszWXe+EXldvhsqhYQUAz7bRhLBtez4AfXOz1lgKAOl23HYMgO8RP38Cy6hXhqdmN0H3aGTNamJJ71POikpSAGvoj+WCneEI/sorDsCoreDskZLoiKRs1bnIZ57tUph5Hu3WC/H8l5NDB8Y2lBuUzsPblvYeDtmxinasS495I+l3tzcGQrCSuHt+c2gAwm5NXIhh3ccX+pNZRi3LV4LbHujjd8rEkj8GKiockcQOqykWHPXqWr1tUJajOj1SknBbLkoVv4AwM5w5hlYymd/emRQ7mCLzJ6rTqunGP6W2xPJU3eOhD9ATfx4O5Nl21ioVvWupsWaHLJ0GvXAyy+HYN9zEq6NXwsiyLBSV1LOnkli2zfW2fKnePW2mi4tSx2PMssDQ3pG7v8/uFI427/2oNZ9BGDC/pRyJmuzxNOfb5aEPAXPU195tTrOh3lli2WAFTmIJb2JqdtjwoDWZZWKz+Btn6RbVW3hXZ2BZer1bQFNneaxm6yk0p8r6GbInHSmNlvCa2yPlqrb0rtMLPC//Wcv+WFFukaUwtzuBZWjl3wS+L8UsSyF/DzjLoOnrZfFCU1bQLCxLaxlMleZ+Jopb+kILBIlhvcmOD240FpCylLZu8EazVA4pPeZzt6iWoy9U7LHs9gksa0IjFbMMvDwNwiW1hoUs3TG/mrEclouKhBXq0IJmYvlkd7dINXdeKeffLArrTTkeqbCebyj97sbCIyoefjRgvSzjk9jFKGFbNiWYDKDfE29VyDIcF7e7HbOKGViOugIMyjJQXkHkBlrST36aFTQTy9Ivh7s5qolp3lFOP9vInQ1b+WkakCXRXPal3wNPqKmnHGPKzHzxoC61MvTpfd8Hci6FLbmOjKUloixkqaRMQe/V9zzP9wVto/8wsLTGTdEHJZWJpHp7vmeNB00L/Zf/St2F2Vie7O7uyjQfimE9TTFfbuTNhj2aEmUpoK0mO+nChCs6JufYt+gx5jA5TaFJYBsPGu3hcNhOx0BsfV98Jbhh5c0GB3ZF48tUbEwbNBvtBMqwFSsvTdnIsiyoGxxA4vGlI7wdlg/6Q9KZRMMGEPQ1sz499H6Kb47nMzG07Bd7AkzD+EQxnMcbxtmwlZWb0y8SYlrhSeOGpqRn8oilol2SCsi8coMb00TyEUWHuKa+5VCX65XOCJ9iZCleYfsdwe4HqdqPmlhSZlCd41GngwoWrK5d7opTWE7XYkXaMR5gJ10s/OkbXSbw8NNTBc7u4a6gm6qh3fmXAuKzDfNs2GfKeQVomQL6YngnFOCoxwI6KGUmVvB5rWzUziSJeVGiE6WwtLxKK4ncbMGliaUjdJZ+rAxYg5Fc4XyWfrPfDrP7hGx4XfZiNSIXDFiR0qRzXgzv1e9KAa/3JJgqzYcnyvl35JnqjOY1ZTxyXBCZZR2jPRB+bcstYMeCqWPOIu1GHd7jWZ42EeSII46U/Syz9OqS62ViKXRXoK9Hg7pSeXks4UBX0L6U0bKbevw1GrDBaF24KI/lm1tnSgFrDKZKE8N8q5z+xLRk4Zqqlj+u5MeAHO7JCo8zUm2WoGwddkGmHEPeJRkzYHpCl8WeX2IJUvkKA0tXiF1ogQckEswclp40MIrYIbtuShFweVRMCBnksDw+3NxVrj/bOzw00cxU8+ET5fy3hiSSm8o5364UBYGYJyOMSly1kxGNrM+8pawB2NugDmyoNJgj5TEMIkstccbAkr8wnkEr5bvksbRjCRl7css2T1/VPHaCcJWZ5enqwepr5fpfqmaYRDcfbijW8vmWlt91+4VS5I/37hX4tWyEwduZNxx9MW02YuadIx3FBGxoqQUCqQipa6ydeBsrQ56SkSWzBlZZCw9nFwmDGyNLS259h9nQ3HprJqiUy/Ln1c3NPQXOyR7SzDxD+3BNZf9SW010TznjexQ7yPd+mPGyBszI0qCPnY7JQavOGrCn6jHzniyQN4eb0OfnjSKMSYBm4HSW4dhk75S7CD2qiaUvqz8fJvs5SVi8RI/TzmH5O2S5+oty/euqiSa3tAp7Z19ZgHJHwXZ8b2Xl3opqmwXRK8fi6n5AO05uPalFteysBfjrndvKpT47h7YnZ+nr86M6Sx5asLWzmfBe3ji+rMuvGnsHPWP/i4R5dYLzl8OyCllubirjktLh3p5Mc3f/i1/272dJJGtvldNfKSlBquPzE44eqL8Kwl4+1qj0F8ti1pYZ2Ug1sSGLNuTlGIr3MMHR5+d1liw8bCDPhPepJpaeYkm5Ac1PQuDgIv0nsd4nm6tIMdVxyavqnkjz8O0JfJ7js63M0t7XxiXy2jA1nrByc1IgiIY4GC/acLAjo4NJizrtPHydjT6Yg6BNpwjCXELLzsrhLJuG0zWWMbMGuZkZ0lycgaUyRRvxSdjQzRM+8cIuNrN8t70KZVMfl4gwD1ng7m2WEqQa5SfiSr8NVQE/u0bievktUOp7VLFIp8gsC2oRarf87GGYgtA3daiptUm4EmSXMZa652NiWdY7dYMMDKrG47Gyz8QDBRbP+1CFj0rYuNnM8vNbq1j2FJfhrEpgIpp7Qgz27S5WzftqWPYth7lxWzn2nOz4dPNaQQvUmDdDWoA6pnjQQXuVrFNhA2g7zq7m+aJ5eWnGs4R5Ev1sjWVksx8KbsIH/6Z5klh+CwI+hLHyhZ7CXV0zy99ubWPN3P5ZqdIvB5Tm3hvh5+Md0mmqYdkTIVtP9XHuZWG9awVhvIj6iFkmNm13bHND2ncSnyPQEPBnyxkrYGHxAupE1VRbLYrGMrTVfsAoXeWtRGKaN8dPUjQFrQn3j8ws30CWGOaB0gUe71WrhGZVsr//IilB99Ww7L92smy9rbfKkRd3aFivKPuH2lGLhPGo6uFWZqM2UnXaWrzf4l5JEUvezWbvwIWwnJjvIwh7K6djmdLrzCwPEUtEc/tNSZafNwnMqtw3PjnMBihqeHWHJnipL8VNGqS9pgYQRBky3UPVo56q5eGujUZHCAQ2ImEeS8P4bHm3uEQsZ9PLlF5nZlm9xWCq7s/hAYJZPZChnexlLFX35xWBua85PmwCRQsGicLcACAms2WDDjqcwG3B5kh4/8HtWhHLtub+zsRS+KHgJrPZ2ImZEBLLCTb24NatjOb2oVKpM8zyQOlIz/ay2MGuyn4DJx5sKU7UCZ8NK2TJvEzcUnRcTzWITvQiD5TPkbAHaas9oVG0Vp6NJfNjpRkbTfoFfqyWBsYnvAp8Hyo8ZGxmubrAYC68U2r1O7Kyu0q9X+/RQJBK7WzHlBD0UgjSFgQLRM8E5asL7JCkHm90OnwRnMLh5PBJSRyTZL3qjCxZoLFepP080DeZJc9aspqThc/JmVnewiwJzaoC5/TgoLqpstk5pGG9XW1csrO/s6H89nxLCLkXsgyFfoY2MpvPpEMW1GXQsILAjdkqNkoxCINjeWqsYDqWoymCNPwxpmEpTPYlubECJjyklcdygdFc+FWp1xerm3pAiIf11tTwzs7Ojmp4bwshdy20Z34ur8V8GTbooDEbaxwx308cSzJb5eUPMHmKGA0OzchSSMnNfwyepDQFy+nCgrqYWW7fXWA0b60qLujT6qqaQHJ/T4jRvlVu8doQqBUj7oUs+ZAyDukYhPeILL6e0DkSayyMu5n59HJ9TK4Demx9OpY8LzB/GCtMek3Dkr8ehX2wKjn95V0B5oKWLqIOVL6oShF3NSy7r45H7kizYcUs+STmkOFiB1l8PaW+hdQ1ChHtvL6s7WunzMiSc8pbWi5nkUzBMjJZ5MliZrm5dFeguaCaSNWKVuX5E3Vcoo45X+5L8yfFLJmzao31HjFkU9I0cCm5rCHL3sjrMVkETpixmpGlkEefFysUHNOpWPI+uHigo4iZ5d46gklpLhwUl/GGB2kxzb2CKckSDezxJdWFYxIxXyL7ry+0GLOirKmka3lyBkhNZfMJfGEieVaWPExjjY3qL+XoTsVSMCg5iQVOX7+VmeXv15eWBJpLn5sLJHLGY7QZzZ3CZQa35S2fJrHkM//Zk4uRaDVjWwm+hHwRnWlcEvF8R4unu83Kkg2HUN0MMCMpqX0qliWeIq2nD2JJgd1Qu2czy19vrIswFzafGgvE4tw/oDFaCnNPTRcR5clDumyT4NyakP3sNuUoiNQrhQpLX4kKCOuI/JE6JxUICbJCfsfMLMWFZ3XNzIp3mZqlsBuaKfPEgQbH8pvKkZw5r8V1BJPRXFLHJYK8xhFaiebhboFiZoEgBnNr0lqhvtQWsjvgSEs+9DVhrpCwTxa18kMtIXFddBhnZlnq8BpaoCW9Mk5XSVyfjqVolsFIVfZk4JN7yYnVOXPRN66vM5pYNdV0ESbH1YODqkpzT3V/uLx+qC6Qzz2V1lzSPUtOGJVWlxhcnKFwsQXsVkKuDmt94ItHhKefnWUoBlA90M9uUnKTBlCXSk/HUl7WACo1/oI4yYi9hDYYTcx1Pl2/jmBy3VxSw7JM3mweHOg0q6rrS+VkX10gXzQXjSWSjKzi+MvzQwZ7lEpLiTxvEFcqlbjpe7nXzc5SGNngKvrNSqfR6FcGnrY0aFqW8g7Ntt8cdWtJEAS9/sAWFN0WUxLMLJ2FG9clmgvralg2k5NVzFKFubdvPr30VtwpEdHcf5lzJpdUbHe1gcXWMiZbKTuQW/irP0oXLCWDzMFSWApPb4J3/hB+mJWlK69DsWyffDtGJAnfTdHI5uThvV9UYC6tmtsZJV+aaFbVsCyRs7WHyk6J+8UDGCSinZTWI+BWFB7ZOBqLmjJMXYDclvOwLI0K5xwtm8+lTskSjpcmT2PKE0A5LH9dvoFgCjSv/2Zq5ne3UO4lgSnT1GalsWzpe1dMXsQnOjAarprwxObwpVspnqdX1/PMxbJUKWh5qD7Fa9yNkTqnMyG/QP1uTQ7Ldw9u3GA0McylbTU0B+Xp3ipOpDXQrH5hqN6rXW1JtTqFYpI+tyu+tnPIWIipmCN1Tmraq4U2JGgpLTkfS6efexPLG86UV8Du1SjcacEbKwG+HJYndxcFmJjmdTUsC+VnnK9noIn6TJ398Y6yCnd/X1sfZhK+Ts/QI/LQj5rPJhRge2Wz+E1tnno+lqVSL+cmNlpiNg9LtP1EXr2hUlbUpshbs/d++QYRQTe1ccnx6jbJvRRoMtWsqhF4kuGlrtuc3F1KS9gG2kFhmVXeQhpYQkdfbY4Xj3d1/POyRDtn6TtQ2CBGruZ8LEtRqg1qslINlctj+fnR4qIEc31pXQvL/p6lXpoN7YE6LjkxLMKdGCnA0gQeEcPm02HZpweL0mCD1AOS+2rZYNwyKXKN3czEkt3MBCCBr4zkvXogJnrfZoUKLOlPRTNbYWsslVnGa+4HhncQDmNogTLLpw+WF1WaN5Sw7NndLMErh+aacq9f9CXVD9/mP4UgwwYVwxRhlx5Liwtx250m3t0Q72zoNzs5Oz4GKS3P8G44rCZdI4AgjW28uyG6hx33a9lZCSuUt3PKiiqudw2Vibc3JDUf9M01Z62UKq30HsNcFGFe35ZPOVzI8rsEmgcCzQM5LHum7CuDF/pNY2LPT8Kk1+iPKp20NQyKcmY/RNxg2E07lVG/VTu375ZGQQ1XfNRPu7Ugf6FTjnx+tLys0lyUxiWfr7MEr1WNJoZ5KBnQNX1J9drOLPPmVzKvIJYcJqZ5fUnwTZ+SZD1dNTnNAzEs+7qqL8LV8tyv5ELkGYYp07zxjB//dX1ByNYz0ESayV3f4/uGJdVaOsmVXIicLj8wwGRh2ZMFISUoTzcP+Jj0i6phSfU0gYIrOQd5f/RAo3mDuT/v18lsWB5NwnKV+jan6pJqzDJvNuVKzllOjyhMgeZy5v68WxSTSPJVkya4r8lLqkladN5kypWcu7x//OCBRvMuSRfZvC7OVOfTXCULT54cKPldWK7U8r8mp4+RZgo0sWL+Bx36TUki0WhuUppV7N7sqilBptzLK7lAeQZhcppUNaFv+nRBTjvIp3mwisKyP28qSSQ49fLKif0vinN0dKSo5uKN5fcQ8qIwGzbB0G6elU6q8twmzu/aM02KXcmFyb8fG2guvzuVZ8MozhyauyQnSMkI2lP327uSC5b3BOYRgwlpLm+TCbHrU+rm6i+GtIO9PXMSyZVcmDxd5jCZai4vK7NhE7rN1WnTDq7kQuXPL4+OdJra3ObkblOmWVU3z5tH3DDkkx2t7qzTB208BzjtVMasUx6wcrRC016atNDcZkSnGyLx8c5F/nh8pNFcVGfDpnGCxNmw6jn4sEkaj8fNSi9rKeBp2SPBqGhte6mO1kt2B3nf/ZSlN8jfHtEgbgtWbkDmEZNmfr6DJC20ECgZk2/rhP3BeDwuummtMmW5XBY4TJNuTqBpng3T1sjPLO4IfZMOfcmuSSbqgb55awAKV7w1EUsPGDa9k0tB/+fEYDDD9Fw4QJUDoIxmsxsgd+dQWbooa6IBcNZoWEefxcj7hjeWNijY5s8sTxcfG1TTbGjzaUoR980P7iyDOvC6QRQF7TEgD2xi6U1mORwVJZagVCOyrKFm+IhbvnTAIHHdBL5v8E0IKtOpPmEZNdqkBLyUqej9mYNl6fTB42LVVGlO6jY3Pzjg48YkIwr9M8UNNi/LSRIV67ZZwjrZWtvp5G8PbJAuV0NnXC7alQTLPCxL7x4/NtKcWjXlsN6qnqA3q3QBXyHkdLAPQ1k6YVLL3AfM0g1qIX+73TAJ4dkRuhqzdMmngN2wFlIXxYkSlNzhwlJcF9rpCJ3t0E8GRwlL/UBnwD/1NyKwsw1rw6REL4WFOGEtcHAR2eIhVAC6W0Sfqpud7Qb1Zih+qDgKeP3QX6iAuViW3n15PjQxTm1X2jnEEpPvCamMZVJBiy6I4UQsu3X4Z0zP7g3QX0lURlseYJYNrAtJDH/PMmVxCeVuaQRqaIGDRbZi7xENc1sWPEpcEqh1tS7sFEFH7Q6DsvjVhSHow+YvxwHq4iuB00A9PS6hD5IQ/WiTz1lglgk0BG7dtiy0T1OWJhqmnvAUbsPGNx3OxZJo5nSGdmlCt7l9DigToGc1E5ZtAPwKgoE6ncCLU+DHFfjo2KF14YFBB+Js4U/vYpYpar8QNlSrQzpeWIKNShhVEEu7bpXrZZuyhB4JiCuwi0admdPxoEfU6EP3Se3W4PX8O8BD0IH6a42bfr9v+fEIxI0KuVff78IXo4I+YYwqz1mOIcg62oTBRxVPPGClDQidgLVRHZrAaszHsnS6PD3Nwm5zu2BV7tTSBvoeL5hlAvBSVrdFnA7bAg3U6F0bs+2DMdLXMAaWzLIFUvh3Db34NYDTn92WT7KSQ1DBX/IhLJsAL2KvjdEFTsfGKyKg06r2ihGEVU8TgpOwLNtoz9uobmMiQ4D+6ttkHUFYAWgjYcYSaTY87sBfWmgbLvIqJmNcoyZJWK+N7aLtqovk5MaXMs0HYlhvkSe5Fxra7W3jCqNZpQ1S8o8kkyBjWaFbNTSQXQtsulizh1QnANkuZ1Fsyywb2XfX4P9iWkLLxy1HfR/Mckg9rgTtMQRtbJodS9Uaur0YmsUYD34zlj42u11ANkaoo5etT7OSXfw6iCzJ/gk9VJsedb9qyKdug+xTJok1L8vS020Cc85uk8C8dT5BWKaXNlmTiN5bxDKw6tQtAV4EWVJn0B3DRuuyr/q0gcxyCKweaSDotbASqF7iPzHLPlNA9C/IMuthQUcfOzhJqwxwu2c2lnx7o5YZRmTBYSlpdjbu+3JYxjQfHw5yo1KHuQqdOW0skq8ymFONNk2quVA9pxnLGu0vGykS/FIjlgkfQMQQHuwv6Z8NaGRT1gqhwhIaWej6IJw13j4VjSVsS+qzDkGKfZ+sOANLfNYYFZexJNux17LXcIT3Y2Q1glV181ha1rhOpAwCWAfaEc/p+xA5XcpXzSkCQXd/LdiNZCZxpJWHzgC9uBrLUGSZFrMsBd2RD+o1sYTpWQZ5LEuBD1s+YxnPz3JAZSyynG9MQsX547GJ5vIUurlwdzNnlfw80hAjakOA7CK2sWU67HRBGdlYug0oxF1kY/EpYd8bONzGOp5uY1O2WiglNjaHZUgXjUTovkUsU/YM+Ta2AoZ4qBnhgS63sekHsRRUc8aw3tL6m/NSSiRRE7DdeoIxxiH7Pi3Z92mDMfJ9su7TJb7PmLPEzeOO7QDqc8Y2831C2fcZZN1q2QsLWMa0Pw8AcIpYshVZcYHv06a2wiWjrmxVWGB5H8YSbf0zjaGVZ8OWrv9+zrk9QRmUe4FbigI48saPysYkyPNvZGMSG6QoZtMlXBrAQv8JBmRMUqcs3RjrWw19n5CW0AJWxpJsvE/GJDFoIj8kwUM9hWUyZHYfHq/AAUlUG6BXqoCl7dnoNQoqGFAOS2hWR6gOAalmTMZFCfCQH+v0zfu2TSfOVwU0DbNh6+vX35+jec0EPhiwxoMx9GRT3EgAb9M0hOO6OK4DG0PzK134Z4WG350+8JsjOFjo1dEnsctML9vAH4wqdOQH6pVKHfRHmJRTAfVBk7KE40ZvAMfpoOFoLGNh67qhBzxYOR/rMWFpm3wfvzcGzdHAwqNNMprMWBJb38PdAhzAlmNUvwoOBsbAjisDMGghGwtfG8MXcaaXp0U0VSfoxvoFkCyh1ZSVse2Vm3Seoz7IYnh1zxuTjf+CcafUa9oQZ6YxTju2fCsOoiZaXj1AmtwoI0a1uOx7TbKiMqjU8b87eMKqFI6a9THEbZHPRXebtl8eYJvs9MuZH2uj3Sua4lLeoDO2fWuAY3O1cgpZNivk0871FJ/QLw9JDK+D7kZieL060ssyspxBE6txr4zfj6gFn8IeZCt/0V9+fRQNyyg2OLZnmljVxfn3jS9zYwfikoXF5WcXQhJLGCR8LaJLu6yQRq7hbzhMnYjB7wDFFfCB7P9oHD5JWNAtZLF1UgqKajv0L4eUgA/Q+6AIeFhuSmHZCJ5HLiGxdZcU72T/xaX3kWKH7CEc/AxZsN8ll9I6BImwmJM8Uxaz/wATS+X02QOMM081UcLeg4NzCfN8FJL4s3si/Zm2+r1Iefru2cKRNIMixPWOju6+/+1/KZl5ONNUJZHLwxKKc/rns4XlI2mY8vhoeXHp/Vfv/pdAlpCtm31Be+cyscTy9PTdn//+zx/Pnr1//+zZH1/9+e5/DePc0u2cQ2c3Qf4fWEwdiYrPE3wAAAAASUVORK5CYII=',
          }}
          style={{ width: 200, height: 46, resizeMode: 'contain' }}
        />
      </Text>
    </View>
  )
}

function ProductSelectionScreen({ navigation }) {
  const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0)
  const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0)
  const [shadowRadius, setShadowRadius] = useState(0)
  const [shadowOpacity, setShadowOpacity] = useState(0.1)
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            width: 300,
            height: 200,
          }}
        >
          <Image
            source={{
              uri: 'https://worldref.co/wp-content/uploads/2021/01/WorldRef-Logo-compressed-1024x690.jpg',
            }}
            style={{
              width: 300,
              height: 80,
            }}
          />
        </Text>
        <Text style={{ padding: 10 }}>Hi! What do you want to do today</Text>
        <View>
          <Text
            style={{
              width: 300,
              height: 200,
            }}
            onPress={() => {
              navigation.navigate('MyTabs')
            }}
          >
            <Image
              source={{
                uri: 'data:image/png;base64,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',
              }}
              style={{
                width: 300,
                height: 80,
                borderRadius: 5,

                shadowOffset: {
                  width: shadowOffsetWidth,
                  height: -shadowOffsetHeight,
                },
                shadowOpacity,
                shadowRadius,
                resizeMode: 'contain',
                borderWidth: 1,
              }}
            />
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={{
              width: 300,
              height: 80,
              borderRadius: 5,
              shadowOffset: {
                width: shadowOffsetWidth,
                height: -shadowOffsetHeight,
              },
              shadowOpacity,
              shadowRadius,
              resizeMode: 'contain',
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{ padding: 50 }}>
          <Image
            source={{
              uri: 'https://worldref.co/wp-content/uploads/2021/01/Worldref-scaled.jpg',
            }}
            style={{
              width: 300,
              height: 80,
              borderRadius: 5,

              shadowOffset: {
                width: shadowOffsetWidth,
                height: -shadowOffsetHeight,
              },
              shadowOpacity,
              shadowRadius,
              resizeMode: 'contain',
              borderWidth: 1,
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

function Profile({ navigation }) {
  const [image, setImage] = useState(null)
  const [input, setInpput] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [cname, setcName] = useState(false)
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)

  const inputEvent = (e) => {
    console.log(e.target.value)
    setInpput(e.target.value)
  }

  const inputEvent1 = (e) => {
    setCompany(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setName(input)
    setcName(company)
  }

  const currDate = new Date().toTimeString()

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  const Tab = createBottomTabNavigator()

  return (
    <View>
      <ScrollView>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              padding: 50,
            }}
          >
            <Button title='Upload Image' onPress={pickImage} />
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  resizeMode: 'contain',
                }}
              />
            )}
            <Text>{search}</Text>
            <Text>{company}</Text>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={{ width: '100%' }}>
              <Text>Enter Your Name</Text>
              <TextInput
                title='Enter Your Name'
                placeholder='Enter Your name'
                style={{
                  textAlign: 'center',
                  flex: 0.3,

                  borderWidth: 2,
                }}
                value={search}
                onChangeText={(value) => {
                  setSearch(value)
                  setSearching(search == '' ? false : true)
                }}
              />
            </View>
            <View style={{ width: '100%' }}>
              <Text>Date</Text>
              <Text>{currDate}</Text>
            </View>
            <View style={{ width: '100%' }}>
              <Text>Company Name</Text>
              <TextInput
                title='Enter Your Name'
                placeholder='Enter Your name'
                style={{
                  textAlign: 'center',
                  flex: 0.3,

                  borderWidth: 2,
                }}
                value={company}
                onChangeText={(value) => {
                  setCompany(value)
                  setcName(company == '' ? false : true)
                }}
              />
            </View>
            <View style={{ width: '100%' }}>
              <Text>Info Field</Text>
              <TextInput
                title='Enter Your Name'
                placeholder='Enter Your name'
                style={{
                  textAlign: 'center',
                  flex: 0.3,

                  borderWidth: 2,
                }}
              />
            </View>
            <View style={{ width: '100%' }}>
              <Text>Info field</Text>
              <TextInput
                title='Enter Your Name'
                placeholder='Enter Your name'
                style={{
                  textAlign: 'center',
                  flex: 0.3,

                  borderWidth: 2,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 20, marginLeft: 50, marginRight: 50 }}>
            <Button
              title='Submit '
              onPress={() => {
                navigation.navigate('MyTabs')
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

function AnotherScreen() {
  return (
    <View>
      <Text>Another Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Screen</Text>
      <Button
        title='Click'
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          navigation.navigate('AnotherScreen')
        }}
      />
    </View>
  )
}

const HomeStack = createStackNavigator()

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Settings' component={SettingsScreen} />
      <HomeStack.Screen name='AnotherScreen' component={AnotherScreen} />
    </HomeStack.Navigator>
  )
}
const Tab = createBottomTabNavigator()

function Tabs({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={HomeStackScreen} />
    </Tab.Navigator>
  )
}

function Chats() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen name='Tab' component={Tabs} />
        <Stack.Screen name='MyTabs' component={MyTabs} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen
          name='ProductSelectionScreen'
          component={ProductSelectionScreen}
        />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='AnotherScreen' component={AnotherScreen} />
        {/* <Stack.Screen name="CheckTabwithpage" component = {CheckTabwithpage}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Chats
