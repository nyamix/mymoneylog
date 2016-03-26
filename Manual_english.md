# Introduction #

The original idea came from Aurelio Marinho Jargas's [MoneyLog](http://aurelio.net/soft/moneylog/) where he use a single html file with javascript to parse and show a nice report about the transactions you have typed inside of it.

After I have started to use it, I miss some more functionalities and myMoneyLog is the result.

# Using #

## Categories and Accounts ##
As you insert or delete them, the summary will be updated automatically.
## Entries ##
  * Date format: Year-Month-Day, 4 digits for year, 2 digits for month and day, e.g. Jan, 4 of 2008: 2008-01-04
  * Value: put the negative signal (-) for debits, e.g.: -100,00
  * Description: avoid special characters
  * Category and Account fields: have auto complete support, type any key and a list will be displayed, press ESC key to hide the auto complete list, if necessary

## Editing and Deleting ##
To delete an entry, press the red delete icon of it.
Note that the excluded entry will be displayed in the entry input form, to edit or undo your deletion just add the entry again.
## Recurring entries ##
To insert recurring entries, type the data normally, and specify the amount of times in the value field, e.g.:
Annual rent fee of 600,00 (12 times) with due data starting in 2008-01-05
```
date: 2008-01-05
value: -600*12
description: rent fee
category: home
account: bank
```
Note the star signal meaning times.

Another example would be the purchase of a gift with the value 550,00 divided in 10 times, in the value field type: -550/10
```
date: 2008-01-10
value: -550/10
description: my gift
category: gift
account: credit card
```
10 entries of -55,00 will be made on each day 10.
Beware that some rounding can occur.
## Reconcilable entries ##
To insert a reconcilable entry put a question mark after the date. Until the entry is accepted by pressing the green accept icon, its value will not be considered and its date, if expired, will be the current
```
date: 2008-01-01?
```
## Transfers ##
To make a transfer, leave the category field empty, when moving to the "from account" a new field will appear: "to account", type the origin and the target in each field, by pressing the add button two entries will be made: a debit and a credit.
## Data Editor ##
Use the data editor feature to edit the text data source, it is very handy in some cases.
Each field is TAB separated, just press apply to save your changes, a backup file with a "old" file extension is generated with the previous data.
## Filtering ##
The entries can be easily filtered by typing in the filter field.
To perform advanced filtering, use the regular expression option.

Examples:
To filter the "entertainment" entries of December 2007:
```
2007-12.+entertainment
```
Filtering "entertainment" and "gift" entries:
```
2007-12.+(entertainment|gift)
```